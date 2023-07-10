module.exports = async function (context, req) {
  const date = "2023-07-10T12:19:44.776Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

