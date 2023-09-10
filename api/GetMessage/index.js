module.exports = async function (context, req) {
  const date = "2023-09-10T06:10:30.588Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

