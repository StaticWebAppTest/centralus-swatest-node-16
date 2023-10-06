module.exports = async function (context, req) {
  const date = "2023-10-06T03:09:09.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

