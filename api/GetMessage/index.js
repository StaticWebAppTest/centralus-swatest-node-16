module.exports = async function (context, req) {
  const date = "2023-09-06T18:11:02.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

