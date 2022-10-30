module.exports = async function (context, req) {
  const date = "2022-10-30T18:15:18.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

