module.exports = async function (context, req) {
  const date = "2023-12-27T08:11:39.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

