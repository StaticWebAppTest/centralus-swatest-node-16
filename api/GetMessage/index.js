module.exports = async function (context, req) {
  const date = "2023-04-23T09:08:08.427Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

