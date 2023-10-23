module.exports = async function (context, req) {
  const date = "2023-10-23T04:11:02.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

