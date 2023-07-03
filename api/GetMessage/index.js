module.exports = async function (context, req) {
  const date = "2023-07-03T13:20:27.628Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

