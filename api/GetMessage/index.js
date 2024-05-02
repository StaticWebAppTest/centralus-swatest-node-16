module.exports = async function (context, req) {
  const date = "2024-05-02T18:12:23.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

