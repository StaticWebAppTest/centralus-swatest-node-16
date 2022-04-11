module.exports = async function (context, req) {
  const date = "2022-04-11T17:15:27.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

