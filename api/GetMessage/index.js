module.exports = async function (context, req) {
  const date = "2023-10-28T02:13:28.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

