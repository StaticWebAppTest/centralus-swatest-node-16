module.exports = async function (context, req) {
  const date = "2023-03-12T17:08:02.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

