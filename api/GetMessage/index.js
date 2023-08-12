module.exports = async function (context, req) {
  const date = "2023-08-12T01:37:33.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

