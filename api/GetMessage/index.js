module.exports = async function (context, req) {
  const date = "2022-10-30T13:27:47.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

