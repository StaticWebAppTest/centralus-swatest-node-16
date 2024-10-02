module.exports = async function (context, req) {
  const date = "2024-10-02T17:10:19.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

