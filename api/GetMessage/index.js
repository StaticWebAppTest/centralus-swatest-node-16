module.exports = async function (context, req) {
  const date = "2023-06-11T01:00:01.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

