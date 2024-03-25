module.exports = async function (context, req) {
  const date = "2024-03-25T17:09:06.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

