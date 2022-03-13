module.exports = async function (context, req) {
  const date = "2022-03-13T11:08:10.929Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

