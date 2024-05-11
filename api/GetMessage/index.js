module.exports = async function (context, req) {
  const date = "2024-05-11T02:19:47.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

