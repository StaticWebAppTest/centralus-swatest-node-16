module.exports = async function (context, req) {
  const date = "2024-05-27T23:09:45.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

