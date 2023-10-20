module.exports = async function (context, req) {
  const date = "2023-10-20T08:11:35.572Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

