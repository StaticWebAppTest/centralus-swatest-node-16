module.exports = async function (context, req) {
  const date = "2023-02-09T17:09:19.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

