module.exports = async function (context, req) {
  const date = "2023-12-27T14:08:15.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

