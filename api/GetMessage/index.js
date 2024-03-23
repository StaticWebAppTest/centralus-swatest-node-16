module.exports = async function (context, req) {
  const date = "2024-03-23T04:12:23.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

