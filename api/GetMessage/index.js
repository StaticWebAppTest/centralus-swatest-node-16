module.exports = async function (context, req) {
  const date = "2023-02-21T16:11:45.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

