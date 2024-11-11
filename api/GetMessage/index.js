module.exports = async function (context, req) {
  const date = "2024-11-11T23:10:40.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

