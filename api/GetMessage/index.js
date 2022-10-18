module.exports = async function (context, req) {
  const date = "2022-10-18T15:17:10.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

