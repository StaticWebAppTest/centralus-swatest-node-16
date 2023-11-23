module.exports = async function (context, req) {
  const date = "2023-11-23T07:08:43.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

