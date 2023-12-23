module.exports = async function (context, req) {
  const date = "2023-12-23T17:07:40.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

