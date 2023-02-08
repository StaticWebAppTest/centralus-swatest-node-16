module.exports = async function (context, req) {
  const date = "2023-02-08T23:09:45.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

