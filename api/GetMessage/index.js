module.exports = async function (context, req) {
  const date = "2023-03-15T02:08:45.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

