module.exports = async function (context, req) {
  const date = "2022-12-30T10:09:45.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

