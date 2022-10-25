module.exports = async function (context, req) {
  const date = "2022-10-25T14:32:33.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

