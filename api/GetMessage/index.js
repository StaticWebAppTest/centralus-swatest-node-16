module.exports = async function (context, req) {
  const date = "2023-11-23T05:09:08.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

