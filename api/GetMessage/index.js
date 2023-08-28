module.exports = async function (context, req) {
  const date = "2023-08-28T17:07:46.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

