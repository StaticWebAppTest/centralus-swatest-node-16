module.exports = async function (context, req) {
  const date = "2024-05-08T13:12:30.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

