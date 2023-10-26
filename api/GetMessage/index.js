module.exports = async function (context, req) {
  const date = "2023-10-26T09:08:50.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

