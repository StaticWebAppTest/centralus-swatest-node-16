module.exports = async function (context, req) {
  const date = "2023-12-27T13:10:45.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

