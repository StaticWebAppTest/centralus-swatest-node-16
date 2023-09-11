module.exports = async function (context, req) {
  const date = "2023-09-11T09:09:40.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

