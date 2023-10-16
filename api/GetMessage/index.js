module.exports = async function (context, req) {
  const date = "2023-10-16T23:08:27.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

