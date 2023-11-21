module.exports = async function (context, req) {
  const date = "2023-11-21T17:10:45.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

