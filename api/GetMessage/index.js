module.exports = async function (context, req) {
  const date = "2023-06-11T23:08:43.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

