module.exports = async function (context, req) {
  const date = "2024-07-12T08:14:18.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

