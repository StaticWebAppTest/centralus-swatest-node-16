module.exports = async function (context, req) {
  const date = "2023-02-09T13:19:54.561Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

