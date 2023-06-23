module.exports = async function (context, req) {
  const date = "2023-06-23T13:19:03.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

