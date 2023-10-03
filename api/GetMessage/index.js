module.exports = async function (context, req) {
  const date = "2023-10-03T20:09:40.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

