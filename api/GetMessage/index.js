module.exports = async function (context, req) {
  const date = "2023-12-12T01:53:22.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

