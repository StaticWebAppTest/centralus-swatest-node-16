module.exports = async function (context, req) {
  const date = "2024-03-12T10:09:27.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

