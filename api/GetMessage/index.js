module.exports = async function (context, req) {
  const date = "2023-06-19T04:10:50.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

