module.exports = async function (context, req) {
  const date = "2024-10-25T17:11:20.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

