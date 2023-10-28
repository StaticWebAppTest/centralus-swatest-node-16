module.exports = async function (context, req) {
  const date = "2023-10-28T17:07:02.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

