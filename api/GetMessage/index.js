module.exports = async function (context, req) {
  const date = "2023-04-13T07:08:40.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

