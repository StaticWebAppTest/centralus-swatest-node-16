module.exports = async function (context, req) {
  const date = "2023-06-21T09:08:46.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

